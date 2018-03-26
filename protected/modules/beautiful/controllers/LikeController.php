<?php

class LikeController extends H5Controller
{
    public function actionIndex()
    {
        $playerId = ParameterValidatorHelper::validateMongoIdAsString($_POST, 'playerId');
        $type = ParameterValidatorHelper::validateEnumInteger($_POST, 'type', [0,1]);

        $modelLogicLike = new ModelLogicLike();
        $modelLogicLike->execute($playerId, $type);

        ResponseHelper::outputJsonV2([], 'ok', 200);
    }
}
