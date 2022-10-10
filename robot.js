//
// 応用プログラミング (robot)
// G184002021 拓殖太郎
//
"use strict"; // 厳格モード

import * as THREE from "three"

const seg = 12; // 円や円柱の分割数
const gap = 0.01; // 胸のマークなどを浮かせる高さ

export function makeMetalRobot() {
  // メタルロボットの設定
  const metalRobot = new THREE.Group
  const metalMaterial = new THREE.MeshPhongMaterial(
    {color: 0x707777, shininess: 60, specular: 0x222222 });
  const redMaterial = new THREE.MeshBasicMaterial({color: 0xc00000});
  const legRad = 0.5; // 脚の円柱の半径
  const legLen = 3; // 脚の円柱の長さ
  const legSep = 1.2; // 脚の間隔
  const bodyW = 3; // 胴体の幅
  const bodyH = 3; // 胴体の高さ
  const bodyD = 2; // 胴体の奥行
  const armRad = 0.4; // 腕の円柱の半径
  const armLen = 3.8; // 腕の円柱の長さ
  const headRad = 1.2; // 頭の半径
  const eyeRad = 0.2; // 目の半径
  const eyeSep = 0.8; // 目の間隔
  //  脚の作成
  const legGeometry
    = new THREE.CylinderGeometry(legRad, legRad, legLen, seg, seg);
  const legR = new THREE.Mesh(legGeometry, metalMaterial);
  legR.position.set(-legSep/2, legLen/2, 0);
  metalRobot.add(legR);
  //  胴体の作成

  //  腕の作成

  //  頭の作成

  // 影についての設定

  // 作成結果を戻す
  return metalRobot;
}

export function makeCBRobot() {
  // 段ボールロボットの設定
  const cardboardRobot = new THREE.Group
  const cardboardMaterial = new THREE.MeshLambertMaterial({ color: 0xccaa77 });
  const blackMaterial = new THREE.MeshBasicMaterial({color: "black"});
  const legW = 0.8; // 脚の幅
  const legD = 0.8; // 脚の奥行
  const legLen = 3; // 脚の長さ
  const legSep = 1.2; // 脚の間隔
  const bodyW = 2.2; // 胴体の幅
  const bodyH = 3; // 胴体の高さ
  const bodyD = 2; // 胴体の奥行
  const armW = 0.8; // 腕の幅
  const armD = 0.8; // 腕の奥行
  const armLen = 3.8; // 腕の長さ
  const headW = 4; // 頭の幅
  const headH = 2.4; // 頭の高さ
  const headD = 2.4; // 頭の奥行
  const eyeRad = 0.2; // 目の半径
  const eyeSep = 1.6; // 目の間隔
  const eyePos = 0.2; // 目の位置(顔の中心基準の高さ)
  const mouthW = 0.6; // 口の幅
  const mouthH = 0.5; // 口の高さ
  const mouthT = 0.2; // 口の頂点の位置(顔の中心基準の高さ)
  //  脚の作成

  //  胴体の作成

  //  腕の設定

  //  頭の設定

  // 影についての設定

  // 再生結果を戻す
  return cardboardRobot;
}
