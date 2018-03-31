<?php

class MessageController extends H5Controller
{
    public function actionList()
    {
        $sp = ParameterValidatorHelper::validateInteger($_REQUEST, 'sp', 0, PHP_INT_MAX, 0);
        $num = ParameterValidatorHelper::validateInteger($_REQUEST, 'num', 1, 100, 30);
        
        $modelLogicMessageList = new ModelLogicMessageList();
        $ret = $modelLogicMessageList->execute($sp, $num);

        header("ACCESS-CONTROL-ALLOW-ORIGIN:http://activity-ktv.camera360.com");
        ResponseHelper::outputJsonV2($ret, 'ok', 200);
    }

    public function actionSend()
    {
        $content = ParameterValidatorHelper::validateString($_REQUEST, 'content');
        
        $modelLogicSendMessage = new ModelLogicSendMessage();
        $modelLogicSendMessage->execute($content);

        header("ACCESS-CONTROL-ALLOW-ORIGIN:http://activity-ktv.camera360.com");
        ResponseHelper::outputJsonV2([], 'ok', 200);
    }
}
