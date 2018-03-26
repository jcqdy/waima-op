<?php

class PlayerEntity
{
    public $playerId;

    public $name;

    public $company;

    public $like;

    public $job;

    public $picUrl;

    public $uploadTime;

    public $contact;

    public function __construct($player)
    {
        $this->playerId = isset($player['_id']) ? (string)$player['_id'] : '';
        $this->name = isset($player['name']) ? $player['name'] : '';
        $this->company = isset($player['company']) ? $player['company'] : '';
        $this->like = isset($player['like']) ? $player['like'] : '';
        if ($this->like < 0)
            $this->like = 0;
        $this->job = isset($player['job']) ? $player['job'] : '';
        $this->picUrl = isset($player['picUrl']) ? $player['picUrl'] : '';
        $this->uploadTime = isset($player['uploadTime']) ? $player['uploadTime'] : 0;
        $this->contact = isset($player['contact']) ? $player['contact'] : '';
    }
}
