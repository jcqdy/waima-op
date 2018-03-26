<?php

class ModelLogicSearch
{
    protected $modelDaoPlayer;

    public function __construct()
    {
        $this->modelDaoPlayer = new ModelDaoPlayer();
    }

    public function execute($keyword, $sp, $num)
    {
        if (count($keyword) > 4)
            $keyword = array_slice($keyword, 0, 4);

        $players = $this->modelDaoPlayer->search($keyword, $sp, $num);
        if (empty($players))
            return ['items' => [], 'sp' => -1];

        $ret = ['items' => [], 'sp' => $sp + count($players)];
        foreach ($players as $value) {
            $ret['items'][] = new PlayerEntity($value);
        }

        return $ret;
    }
}
