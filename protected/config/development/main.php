<?php

return CMap::mergeArray(
    require(dirname(__FILE__) . '/../base.php'),
    array(
        'params'=>array(),
        'components' => array(
            'dbOp' => array(
                'class' => 'MongoConnection',
                'server' => 'mongodb://127.0.0.1:28111',
                'options' => array(
                    'connect' => false,
                    'readPreference' => MongoClient::RP_PRIMARY,//,RP_NEAREST,MongoClient::RP_PRIMARY,//
                    'connectTimeoutMS' => 1000,
                ),
            ),
        ),
    )
);
