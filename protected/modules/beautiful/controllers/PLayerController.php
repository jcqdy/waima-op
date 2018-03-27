<?php

class PlayerController extends H5Controller
{
    public function actionList()
    {
        $sp = ParameterValidatorHelper::validateInteger($_POST, 'sp', 0, PHP_INT_MAX, 0);
        $num = ParameterValidatorHelper::validateInteger($_POST, 'num', 1, 100, 30);
        $openId = ParameterValidatorHelper::validateString($_POST, 'openId');

        $modelLogicPlayerList = new ModelLogicPlayerList();
        $ret = $modelLogicPlayerList->execute($sp, $num, $openId);

        ResponseHelper::outputJsonV2($ret, 'ok', 200);
    }

    public function actionJoin()
    {
        $name = ParameterValidatorHelper::validateString($_POST, 'name');
        $company = ParameterValidatorHelper::validateString($_POST, 'company'); 
        $job = ParameterValidatorHelper::validateString($_POST, 'job');
        $contact = ParameterValidatorHelper::validateString($_POST, 'contact');
        $openId = ParameterValidatorHelper::validateString($_POST, 'openId');

        $modelLogicPlayerJoin = new ModelLogicPlayerJoin();
        $ret = $modelLogicPlayerJoin->execute($name, $company, $job, $contact, $openId);

        ResponseHelper::outputJsonV2($ret, 'ok', 200);
    }
}
