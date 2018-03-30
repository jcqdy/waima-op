<?php

class ModelLogicOpenId
{
    public function execute($code)
    {
        $wechatConf = Yii::app()->params['wechat'];

        $param = http_build_query([
            'appid' => $wechatConf['appId'],
            'secret' => $wechatConf['appSecret'],
            'code' => $code,
            'grant_type' => 'authorization_code',
        ]);

        $ret = Http::get($wechatConf['getOpenidUrl'] . $param);
        $ret = @json_decode($ret, true);
        if (! isset($ret['openid']))
            throw new Exception('get openId failed', Errno::FATAL);

        return $ret;
    }
}
