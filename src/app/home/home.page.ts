import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
} from '@angular/animations';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  // standalone: true,
  // imports: [BrowserAnimationsModule],
  animations: [
    trigger('position', [
      state('0', style({
      })),
      state('1', style({
        transform: "{{step0}}",
      }), {params: {step0: "translateY(200vw)"}}),
      state('2', style({
        transform: "{{step1}}",
      }), {params: {step1: "translateY(350vw)"}}),
      state('3', style({
        transform: "{{step2}}",
      }), {params: {step2: "translateY(450vw)"}}),
      state('4', style({
        transform: "{{step3}}",
      }), {params: {step3: "translateY(500vw)"}}),
      state('5', style({
        transform: "{{step4}}",
      }), {params: {step4: "translateY(530vw)"}}),
      transition('0 => 1', [
        animate('{{spinTime0}}', keyframes([
          style({ transform: '{{step0}}' }),
        ]))
      ]),
      transition('1 => 2', [
        animate('{{spinTime1}}', keyframes([
          style({ transform: '{{step1}}' }),
        ]))
      ]),
      transition('2 => 3', [
        animate('{{spinTime2}}', keyframes([
          style({ transform: '{{step2}}' }),
        ]))
      ]),
      transition('3 => 4', [
        animate('{{spinTime3}}', keyframes([
          style({ transform: '{{step3}}' }),
        ]))
      ]),
      transition('4 => 5', [
        animate('{{spinTime4}}', keyframes([
          style({ transform: '{{step4}}' }),
        ]))
      ]),
    ])
  ]
})
export class HomePage {
  start = true
  position = 0

  // steps = ['translateY(200vw)', 'translateY(350vw)', 'translateY(450vw)', 'translateY(500vw)', 'translateY(530vw)']
  steps = ['test']
  moveAmount = [1]
  spinTime = [0]
  spinTimeString = ['20s']

  personen = [
    {name: 'leonard', image: 'assets/personen/Leo.PNG'},
    {name: 'sjors', image: 'assets/personen/sjors.png'},
    {name: 'test', image: 'assets/ppics/SjorsCooijmans.jpg'}
  ]

  names: string[] = ['AdrianaCorreia.jpg', 'AmiranDjibuti.jpg', 'AndréFerreira.jpg', 'AndréVallendar.jpg', 'AnouarBousraou.jpg', 'ArjanVuuren.jpg', 'BartSloun.jpg', 'BartZoete.jpg', 'BasBloemendaal.jpg', 'BobBontje.jpg', 'BrittBroekman.jpg', 'CasperEissens.jpg', 'CatalinaPanturu.jpg', 'ClémenceSautai.jpg', 'DaphneTetering.jpg', 'DeveneyPanfred.jpg', 'DiederikHagenbeek.jpg', 'DirkRoest.jpg', 'EmilieFacon.jpg', 'EvitaHoogeveen.jpg', 'FilippoBizzotto.jpg', 'FrancescaNiekerk.jpg', 'GeorgeStavropoulos.jpg', 'GergelyPopoluska.jpg', 'GlaraSofi.jpg', 'HuguetteElleswijk.jpg', 'JoanneTjan.jpg', 'JobSierkstra.jpg', 'JochemBoeter.jpg', 'JoranEems.jpg', 'KellyWeenink.jpg', 'KerimDelic.jpg', 'KevinKho.jpg', 'KoenHoogkamp.jpg', 'LeonardMahieu.jpg', 'LiviaKempkens.jpg', 'LucBochove.jpg', 'LuisBarros Ramirez.jpg', 'LukasMiaskiwskyi.jpg', 'MaartenEnthoven.jpg', 'MarcGlowienke.jpg', 'MariaNolten.jpg', 'MartijnScheve.jpg', 'MeikeHendriks.jpg', 'MichaelKoster.jpg', 'MichelPham.jpg', 'MichielHeeneman.jpg', 'MuratBaş.jpg', 'NielisBrouwer.jpg', 'NielsMeulmeester.jpg', 'OfekSverdlov.jpg', 'PauloFijen.jpg', 'PedroIraburu.jpg', 'PimDoodkorte.jpg', 'RemcoBruggen.jpg', 'RobSpreeuwel.jpg', 'RohanChatterjee.jpg', 'RomyRouwendaal.jpg', 'SaluteJingkaojai.jpg', 'SamuelPirlo.jpg', 'SanderNobel.jpg', 'SanderVeen.jpg', 'SemMeeder.jpg', 'ShiwenNi.jpg', 'SianTee.jpg', 'SjorsCooijmans.jpg', 'SoniaKaczmarek.jpg', 'StanSolinge.jpg', 'TaboWeitzel.jpg', 'ThijmenGoossens.jpg', 'TomDouven.jpg', 'TomFijen.jpg', 'TwanStegeman.jpg', 'WillemHouck.jpg', 'XinyiWang.jpg', 'YannikPeeters.jpg']
  images: string[] = []

  constructor(
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.images = this.names.map(item => `assets/ppics/${item}`)
    console.log(this.images)
    this.setSteps()
  }

  randomIntFromInterval(min: number, max: number) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  setSteps(){
    this.moveAmount[0] = this.randomIntFromInterval(350,450)
    this.moveAmount[1] = this.randomIntFromInterval(this.moveAmount[0]+260,this.moveAmount[0]+350)
    this.moveAmount[2] = this.randomIntFromInterval(this.moveAmount[1]+180,this.moveAmount[1]+260)
    this.moveAmount[3] = this.randomIntFromInterval(this.moveAmount[2]+120,this.moveAmount[2]+180)
    this.moveAmount[4] = this.randomIntFromInterval(this.moveAmount[3],this.moveAmount[3]+120)
    this.steps[0] = `translateY(${this.moveAmount[0]}vw)`
    this.steps[1] = `translateY(${this.moveAmount[1]}vw)`
    this.steps[2] = `translateY(${this.moveAmount[2]}vw)`
    this.steps[3] = `translateY(${this.moveAmount[3]}vw)`
    this.steps[4] = `translateY(${this.moveAmount[4]}vw)`
    this.spinTime[0]=this.moveAmount[0]/300
    this.spinTime[1]=(this.moveAmount[1]-this.moveAmount[0])/200
    this.spinTime[2]=(this.moveAmount[2]-this.moveAmount[1])/110
    this.spinTime[3]=(this.moveAmount[3]-this.moveAmount[2])/70
    this.spinTime[4]=(this.moveAmount[4]-this.moveAmount[3])/30
    this.spinTimeString[0] = String(`${this.spinTime[0]}s`)
    this.spinTimeString[1] = String(`${this.spinTime[1]}s`)
    this.spinTimeString[2] = String(`${this.spinTime[2]}s`)
    this.spinTimeString[3] = String(`${this.spinTime[3]}s`)
    this.spinTimeString[4] = String(`${this.spinTime[4]}s`)
    console.log(this.steps)
    console.log(this.spinTimeString)
  }


  spinWheel(){
    this.start = !this.start
    this.position = 1
    setTimeout(()=>{
      this.position = 2
    }, this.spinTime[0]*1000)
    setTimeout(()=>{
      this.position = 3
    }, (this.spinTime[1]+this.spinTime[0])*1000)
    setTimeout(()=>{
      this.position = 4
    }, (this.spinTime[2]+this.spinTime[1]+this.spinTime[0])*1000)
    setTimeout(()=>{
      this.position = 5
    }, (this.spinTime[3]+this.spinTime[2]+this.spinTime[1]+this.spinTime[0])*1000)
    setTimeout(()=>{
      this.winner
    }, (0.2+this.spinTime[4]+this.spinTime[3]+this.spinTime[2]+this.spinTime[1]+this.spinTime[0])*1000)
  }

  async ionViewWillEnter(){
    this.images = this.shuffle(this.images)
  }

  shuffle([...arr]){
    let m = arr.length;
    while (m) {
      const i = Math.floor(Math.random() * m--);
      [arr[m], arr[i]] = [arr[i], arr[m]];
    }
    return arr;
  };

  winner(){
    // this.alertCtrl
    //   .create({
    //     backdropDismiss: false,
    //     header: "Gefeliciteerd!🎉",
    //     message: `Er zat een ladder verborgen in de gedenksteen. Waar kunnen jullie die goed gebruiken?
    //     <br>
    //     <img src="${assets/img/nijmegen/kronenburgerpark/Nieuwsbericht/headline.jpg}" class="item-alert">`,
    //     buttons: [
    //       {
    //         text: "Ga verder",
    //         handler: () => {
    //         },
    //       },
    //     ],
    //   })
  }

}
