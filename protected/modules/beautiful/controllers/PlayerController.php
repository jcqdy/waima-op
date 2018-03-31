<?php

class PlayerController extends H5Controller
{
    public function actionList()
    {
        $sp = ParameterValidatorHelper::validateInteger($_REQUEST, 'sp', 0, PHP_INT_MAX, 0);
        $num = ParameterValidatorHelper::validateInteger($_REQUEST, 'num', 1, 100, 30);
        $openId = ParameterValidatorHelper::validateString($_REQUEST, 'openId');

        $modelLogicPlayerList = new ModelLogicPlayerList();
        $ret = $modelLogicPlayerList->execute($sp, $num, $openId); 

        ResponseHelper::outputJsonV2($ret, 'ok', 200);
    }

    public function actionJoin()
    {
        $name = ParameterValidatorHelper::validateString($_REQUEST, 'name');
        $company = ParameterValidatorHelper::validateString($_REQUEST, 'company');
        $job = ParameterValidatorHelper::validateString($_REQUEST, 'job');
        $contact = ParameterValidatorHelper::validateString($_REQUEST, 'contact');
        $openId = ParameterValidatorHelper::validateString($_REQUEST, 'openId');

        $modelLogicPlayerJoin = new ModelLogicPlayerJoin();
        $ret = $modelLogicPlayerJoin->execute($name, $company, $job, $contact, $openId);

        ResponseHelper::outputJsonV2($ret, 'ok', 200);
    }
}
