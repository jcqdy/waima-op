<?php

class ModelLogicPlayerJoin
{
    protected $modelDaoPlayer;

    public function __construct()
    {
        $this->modelDaoPlayer = new ModelDaoPlayer();
    }

    public function execute($name, $company, $job, $contact, $openId)
    {
        $player = $this->modelDaoPlayer->findByOpenId($openId);
//        if (! empty($player))
//            throw new Exception('你已经发布过照片' ,10001);
        
        $tmpDir = RUNTIME_DIR . '/tmp/';
        ! is_dir($tmpDir) && @mkdir($tmpDir, 0755, true);

        move_uploaded_file($_FILES['pic']['tmp_name'], $tmpDir . $_FILES['pic']['name']);

        $etag = QiniuHelper::uploadFile($tmpDir . $_FILES['pic']['name']);

        $doc = $this->modelDaoPlayer->addPlayer($name, $company, $job, $etag, time(), $contact, $openId);

        return new PlayerEntity($doc);
    }
}
