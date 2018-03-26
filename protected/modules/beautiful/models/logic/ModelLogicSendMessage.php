<?php

class ModelLogicSendMessage
{
    protected $modelDaoMessage;

    public function __construct()
    {
        $this->modelDaoMessage = new ModelDaoMessage();
    }

    public function execute($content)
    {
        $this->modelDaoMessage->addMsg($content, time());
    }
}
