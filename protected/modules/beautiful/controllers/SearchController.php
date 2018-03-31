<?php

class SearchController extends H5Controller
{
    public function actionIndex()
    {
        $keyword = ParameterValidatorHelper::validateArray($_REQUEST, 'keyword', ' ');
        $sp = ParameterValidatorHelper::validateInteger($_REQUEST, 'sp', 0, PHP_INT_MAX, 0);
        $num = ParameterValidatorHelper::validateInteger($_REQUEST, 'num', 1, 100, 30);

        $modelLogicSearch = new ModelLogicSearch();
        $ret = $modelLogicSearch->execute($keyword, $sp, $num);

        ResponseHelper::outputJsonV2($ret, 'ok', 200);
    }
}
