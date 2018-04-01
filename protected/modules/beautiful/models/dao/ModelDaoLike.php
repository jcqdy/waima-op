<?php

class ModelDaoLike extends ModelDataMongoCollection
{
    const _ID = '_id';

    const PLAYER_ID = 'playerId';

    const OPEN_ID = 'openId';

    const DAY = 'day';

    public function __construct()
    {
        parent::__construct('dbOp', 'beautiful', 'like');
    }

    public function addLike($playerId, $day, $openId)
    {
        $doc[self::_ID] = new MongoId();
        $doc[self::PLAYER_ID] = $playerId;
        $doc[self::DAY] = $day;
        $doc[self::OPEN_ID] = $openId;

        $ret = $this->add($doc);
        if ($ret == false)
            return false;

        return DbWrapper::transform($ret);
    }

    public function queryByOidDay($openId, $day)
    {
        $query[self::OPEN_ID] = $openId;
        $query[self::DAY] = $day;

        $ret = $this->query($query);
        return DbWrapper::transform($ret);
    }

    public function delLike($playerId, $day, $openId)
    {
        $query[self::PLAYER_ID] = $playerId;
        $query[self::DAY] = $day;
        $query[self::OPEN_ID] = $openId;

        $this->remove($query);
    }
}
