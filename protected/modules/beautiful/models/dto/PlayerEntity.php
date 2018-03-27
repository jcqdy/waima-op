<?php

class PlayerEntity
{
    public $playerId;

//    public $openId;

    public $name;

    public $company;

    public $like;

    public $job;

    public $picUrl;

    public $uploadTime;

    public $contact;

    public function __construct($player)
    {
        $urlPrefix = Yii::app()->params['qiniu_prefix'];
        
//        $this->playerId = isset($player['_id']) ? (string)$player['_id'] : '';
        $this->playerId = isset($player['openId']) ? (string)$player['openId'] : '';
        $this->name = isset($player['name']) ? $player['name'] : '';
        $this->company = isset($player['company']) ? $player['company'] : '';
        $this->like = isset($player['like']) ? $player['like'] : '';
        if ($this->like < 0)
            $this->like = 0;
        $this->job = isset($player['job']) ? $player['job'] : '';
        $picUrl = isset($player['picUrl']) ? $player['picUrl'] : '';
        $this->picUrl = $urlPrefix . $picUrl;
        $this->uploadTime = isset($player['uploadTime']) ? $player['uploadTime'] : 0;
        $this->contact = isset($player['contact']) ? $player['contact'] : '';
    }
}
