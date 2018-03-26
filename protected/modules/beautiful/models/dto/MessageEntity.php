<?php

class MessageEntity
{
    public $content;

    public $createTime;

    public function __construct($message)
    {
        $this->content = isset($message['content']) ? $message['content'] : '';
        $this->createTime = isset($message['createTime']) ? $message['createTime'] : 0;
    }
}
