<?php

class ModelDaoPlayer extends ModelDataMongoCollection
{
    const _ID = '_id';

    const NAME = 'name';

    const COMPANY = 'company';

    const LIKE = 'like';

    const JOB = 'job';

    const PIC_URL = 'picUrl';

    const UPLOAD_TIME = 'uploadTime';

    const CONTACT = 'contact';

    const OPEN_ID = 'openId';

    public function __construct()
    {
        parent::__construct('dbOp', 'beautiful', 'player');
    }

    public function addPlayer($name, $company, $job, $picUrl, $uploadTime, $contact, $openId)
    {
        $doc[self::_ID] = new MongoId();
        $doc[self::NAME] = $name;
        $doc[self::COMPANY] = $company;
        $doc[self::LIKE] = 0;
        $doc[self::JOB] = $job;
        $doc[self::PIC_URL] = $picUrl;
        $doc[self::UPLOAD_TIME] = $uploadTime;
        $doc[self::CONTACT] = $contact;
        $doc[self::OPEN_ID] = $openId;

        $ret = $this->add($doc);
        if ($ret == false)
            return false;

        return DbWrapper::transform($doc);
    }

    public function querySortLike($skip, $limit)
    {
        $sort[self::LIKE] = -1;

        $ret = $this->query([], [], $sort, $limit, $skip);
        return DbWrapper::transform($ret);
    }

    public function incLike($playerId, $inc)
    {
        $query[self::OPEN_ID] = $playerId instanceof MongoId ? $playerId : new MongoId($playerId);

        $doc['$inc'] = [
            self::LIKE => $inc,
        ];

        return $this->update($query, $doc);
    }

    public function search($keywords, $skip, $limit)
    {
        $query['$or'] = [];
        foreach ($keywords as $word) {
            $query['$or'][] = [
                self::NAME => new MongoRegex("/$word/i")
            ];
        }

        $ret = $this->query($query, [], [], $limit, $skip);
        return DbWrapper::transform($ret);
    }

    public function findByPlayId($playerId)
    {
        $query[self::_ID] = $playerId instanceof MongoId ? $playerId : new MongoId($playerId);

        $ret = $this->findOne($query);
        return DbWrapper::transform($ret);
    }

    public function findByOpenId($openId)
    {
        $query[self::OPEN_ID] = $openId;

        $ret = $this->findOne($query);
        return DbWrapper::transform($ret);
    }
}
