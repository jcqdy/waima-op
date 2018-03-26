<?php

class ModelDaoMessage extends ModelDataMongoCollection
{
    const CONTENT = 'content';

    const CREATE_TIME = 'createTime';

    public function __construct()
    {
        parent::__construct('dbOp', 'beautiful', 'message');
    }

    public function addMsg($content, $createTime)
    {
        $doc[self::CONTENT] = $content;
        $doc[self::CREATE_TIME] = $createTime;

        $ret = $this->add($doc);
        if ($ret == false)
            return false;

        return DbWrapper::transform($ret);
    }

    public function querySortCtime($sp, $limit)
    {
        $query = [];
        if ($sp != 0)
            $query[self::CREATE_TIME] = ['$lt' => $sp];

        $sort[self::CREATE_TIME] = -1;

        $ret = $this->query($query, [], $sort, $limit);

        return DbWrapper::transform($ret);
    }

}
