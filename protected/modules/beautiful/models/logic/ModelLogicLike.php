<?php

class ModelLogicLike
{
    protected $modelDaoPlayer;

    protected $modelDaoLike;

    public function __construct()
    {
        $this->modelDaoPlayer = new ModelDaoPlayer();
        $this->modelDaoLike = new ModelDaoLike();
        
    }

    public function execute($playerId, $type, $openId)
    {
        $day = date('Y-m-d', time());

        $player = $this->modelDaoPlayer->findByPlayId($playerId);
        if (empty($player))
            return;

        if ((int)$type === 1) {
            $like = $this->modelDaoLike->queryByOidDay($openId, $day);
//            if (count($like) >= 3)
//                throw new Exception('一天最多只能赞3个人哦', 10002);
            foreach ($like as $val) {
                if ($val['playerId'] == $playerId)
                    throw new Exception('今天已经赞过这位了哦', 10003);
            }
            $this->modelDaoLike->addLike($playerId, $day, $openId);
        } else {
            $like = $this->modelDaoLike->findLike($playerId, $day, $openId);
            if (empty($like))
                return;

            $this->modelDaoLike->delLike($playerId, $day, $openId);
        }

        $inc = $type == 1 ? 1 : -1;
        if ($player['like'] <= 0 && $inc == -1)
            return;

        $this->modelDaoPlayer->incLike($playerId, $inc);
    }
}
