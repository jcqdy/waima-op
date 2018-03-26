<?php

class ModelLogicPlayerList
{
    protected $modelDaoPlayer;

    public function __construct()
    {
        $this->modelDaoPlayer = new ModelDaoPlayer();
    }

    public function execute($sp, $num)
    {
        $players = $this->modelDaoPlayer->querySortLike($sp, $num);
        if (empty($players))
            return ['players' => [], 'sp' => -1];

        $ret = ['players' => [], 'sp' => $sp + count($players)];
        foreach ($players as $player) {
            $ret['players'][] = new PlayerEntity($player);
        }

        return $ret;
    }
}
