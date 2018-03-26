<?php

class ModelLogicMessageList
{
    protected $modelDaoMessage;

    public function __construct()
    {
        $this->modelDaoMessage = new ModelDaoMessage();
    }

    public function execute($sp, $num)
    {
        $messages = $this->modelDaoMessage->querySortCtime($sp, $num);
        if (empty($messages))
            return ['items' => [], 'sp' => -1];

        $end = end($messages);
        $newsp = $end['createTime'];
        $ret = ['items' => [], 'sp' => $newsp];

        foreach ($messages as $msg) {
            $ret['items'][] = new MessageEntity($msg);
        }

        return $ret;
    }
}
