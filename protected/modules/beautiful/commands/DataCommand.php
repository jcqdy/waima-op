<?php

class DataCommand extends ConsoleCommand
{
    public function actionA()
    {
        $n = 100;
        $modelDaoPlayer = new ModelDaoPlayer();

        while ($n > 0) {
            $data = [
                'name' => '我名字',
                'company' => '万达影业',
                'job' => '编剧',
                'picUrl' => 'timg.jpeg',
                'like' => rand(0, 199),
                'uploadTime' => time(),
                'contact' => '15951960273',
            ];

            $modelDaoPlayer->add($data);
            $n--;
        }

//        $modelDaoMessage = new ModelDaoMessage();
//        $m = 10;
//
//        while ($m > 0) {
//            $dat = [
//                'content' => '我的评论,时尚最时尚,在光滑的屏幕上摩擦,摩擦,在皎洁的月光下摩擦,摩擦',
//            ];
//            $dat['createTime'] = time() - rand(0, 86400);
//
//            $modelDaoMessage->add($dat);
//            $m--;
//        }
    }
}
