//
// 応用プログラミング 第3回 課題2 (ap0302)
// G184002021 拓殖太郎
//
"use strict"; // 厳格モード

import * as THREE from 'three';
import GUI from 'gui';
import { makeMetalRobot, makeCBRobot } from './robot.js'

// ３Ｄページ作成関数の定義
function init() {
  const cameraParam = { // カメラの設定値
    fov: 50, // 視野角
    x: 5,
    y: 10,
    z: 20
  };

  // シーン作成
  const scene = new THREE.Scene();

  // 座標軸の設定
  const axes = new THREE.AxesHelper(18);
  scene.add(axes);

  // 平面の設定
  const planeGeometry = new THREE.PlaneGeometry(20, 15);
  const planeMaterial = new THREE.MeshLambertMaterial({ color: 0xF0A000});
  const plane = new THREE.Mesh(planeGeometry, planeMaterial);
  plane.rotation.x = -0.5 * Math.PI;
  scene.add(plane);

  // 金属製ロボットの追加
  const metalRobot = makeMetalRobot();
  metalRobot.position.x = 5;
  scene.add(metalRobot);

  // 金属製ロボットの追加
  const cardboardRobot = makeCBRobot();
  scene.add(cardboardRobot);

  // 光源の設定
  const spotLight = new THREE.SpotLight();
  spotLight.position.set(-2, 10, 10);
  scene.add(spotLight);

  // カメラの設定
  const camera = new THREE.PerspectiveCamera(
    cameraParam.fov, window.innerWidth/window.innerHeight, 0.1, 1000);

  // レンダラの設定
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.setClearColor( 0x703000 );
  document.getElementById("WebGL-output")
    .appendChild(renderer.domElement);

  // 描画関数の定義
  function render() {
    camera.fov = cameraParam.fov;
    camera.position.x = cameraParam.x;
    camera.position.y = cameraParam.y;
    camera.position.z = cameraParam.z;
    camera.lookAt(0, 3, 0);
    camera.updateProjectionMatrix();
    renderer.render(scene, camera);
  }

  // カメラのコントローラ
  const gui = new GUI();
  gui.add(cameraParam, "fov", 10, 100).onChange(render);
  gui.add(cameraParam, "x", -40, 40).onChange(render);
  gui.add(cameraParam, "y", -40, 40).onChange(render);
  gui.add(cameraParam, "z", -40, 40).onChange(render);

  // 描画
  render();
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

// 3Dページ作成関数の呼び出し
init();
