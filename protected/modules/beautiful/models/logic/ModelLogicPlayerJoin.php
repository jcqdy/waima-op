<?php

class ModelLogicPlayerJoin
{
    protected $modelDaoPlayer;

    public function __construct()
    {
        $this->modelDaoPlayer = new ModelDaoPlayer();
    }

    public function execute($name, $company, $job, $contact)
    {
        $tmpDir = RUNTIME_DIR . '/tmp/';
        ! is_dir($tmpDir) && @mkdir($tmpDir, 0755, true);

        move_uploaded_file($_FILES['pic']['tmp_name'], $tmpDir . $_FILES['pic']['name']);

        $etag = QiniuHelper::uploadFile($tmpDir . $_FILES['pic']['name']);

        $doc = $this->modelDaoPlayer->addPlayer($name, $company, $job, $etag, time(), $contact);

        return new PlayerEntity($doc);
    }
}
