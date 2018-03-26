<?php

class ModelLogicLike
{
    protected $modelDaoPlayer;

    public function __construct()
    {
        $this->modelDaoPlayer = new ModelDaoPlayer();
    }

    public function execute($playerId, $type)
    {
        $player = $this->modelDaoPlayer->findByPlayId($playerId);
        if (empty($player))
            return;

        $inc = $type == 1 ? 1 : -1;
        if ($player['like'] <= 0 && $inc == -1)
            return;

        $this->modelDaoPlayer->incLike($playerId, $inc);
    }
}
