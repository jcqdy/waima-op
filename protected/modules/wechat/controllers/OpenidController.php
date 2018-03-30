<?php

class OpenidController extends Controller
{

    public function actionIndex()
    {
        $code = ParameterValidatorHelper::validateString($_REQUEST, 'code');

        $modelLogicOpenId = new ModelLogicOpenId();
        $ret = $modelLogicOpenId->execute($code);

        ResponseHelper::outputJsonV2($ret, 'ok', 200);
    }

}
