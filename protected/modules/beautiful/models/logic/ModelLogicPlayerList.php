<?php

class ModelLogicPlayerList
{
    protected $modelDaoPlayer;

    protected $modelDaoLike;

    public function __construct()
    {
        $this->modelDaoPlayer = new ModelDaoPlayer();
        $this->modelDaoLike = new ModelDaoLike();
    }

    public function execute($sp, $num, $openId)
    {
        $myLike = $me = [];

        $day = date('Y-m-d', time());

        $likes = $this->modelDaoLike->queryByOidDay($openId, $day);
        foreach ($likes as $val) {
            $myLike[] = $val['playerId'];
        }
        
        $myPlayer = $this->modelDaoPlayer->findByOpenId($openId);
        $players = $this->modelDaoPlayer->querySortLike($sp, $num);
        if (empty($players)) {
            if (! empty($myPlayer))
                $me = new PlayerEntity($myPlayer);

            return [
                'myLike' => $myLike,
                'me' => $me,
                'players' => [],
                'sp' => -1,
            ];
        }

        $ret = ['myLike' => $myLike, 'me' => $me, 'players' => [], 'sp' => $sp + count($players)];
        foreach ($players as $player) {
            $ret['players'][] = new PlayerEntity($player);
        }
        if (! empty($myPlayer))
            $ret['me'] = new PlayerEntity($myPlayer);

        return $ret;
    }
}
