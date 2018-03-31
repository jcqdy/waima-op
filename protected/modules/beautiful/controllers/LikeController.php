<?php

class LikeController extends H5Controller
{
    public function actionIndex()
    {
        $playerId = ParameterValidatorHelper::validateMongoIdAsString($_REQUEST, 'playerId');
        $type = ParameterValidatorHelper::validateEnumInteger($_REQUEST, 'type', [0,1]);
        $openId = ParameterValidatorHelper::validateString($_REQUEST, 'openId');

        $modelLogicLike = new ModelLogicLike();
        $modelLogicLike->execute($playerId, $type, $openId);

        header("ACCESS-CONTROL-ALLOW-ORIGIN:http://activity-ktv.camera360.com");
        ResponseHelper::outputJsonV2([], 'ok', 200);
    }
}
