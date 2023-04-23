import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  // standalone: true,
  // imports: [BrowserAnimationsModule],
  animations: [
    trigger('rotating', [
      state('begin', style({
      })),
      state('end', style({
        transform: "translateY(100vw)"
      })),
      transition('begin => end', [
        animate('1s', keyframes([
          style({ transform: 'translateY(100vw)' }),
        ]))
      ]),
    ])
  ]
})
export class HomePage {
  start = true

  personen = [
    {name: 'leonard', image: 'assets/personen/Leo.PNG'},
    {name: 'sjors', image: 'assets/personen/sjors.png'},
    {name: 'test', image: 'assets/ppics/SjorsCooijmans.jpg'}
  ]

  names: string[] = ['AdrianaCorreia.jpg', 'AmiranDjibuti.jpg', 'AndréFerreira.jpg', 'AndréVallendar.jpg', 'AnouarBousraou.jpg', 'ArjanVuuren.jpg', 'BartSloun.jpg', 'BartZoete.jpg', 'BasBloemendaal.jpg', 'BobBontje.jpg', 'BrittBroekman.jpg', 'CasperEissens.jpg', 'CatalinaPanturu.jpg', 'ClémenceSautai.jpg', 'DaphneTetering.jpg', 'DeveneyPanfred.jpg', 'DiederikHagenbeek.jpg', 'DirkRoest.jpg', 'EmilieFacon.jpg', 'EvitaHoogeveen.jpg', 'FilippoBizzotto.jpg', 'FrancescaNiekerk.jpg', 'GeorgeStavropoulos.jpg', 'GergelyPopoluska.jpg', 'GlaraSofi.jpg', 'HuguetteElleswijk.jpg', 'JoanneTjan.jpg', 'JobSierkstra.jpg', 'JochemBoeter.jpg', 'JoranEems.jpg', 'KellyWeenink.jpg', 'KerimDelic.jpg', 'KevinKho.jpg', 'KoenHoogkamp.jpg', 'LeonardMahieu.jpg', 'LiviaKempkens.jpg', 'LucBochove.jpg', 'LuisBarros Ramirez.jpg', 'LukasMiaskiwskyi.jpg', 'MaartenEnthoven.jpg', 'MarcGlowienke.jpg', 'MariaNolten.jpg', 'MartijnScheve.jpg', 'MeikeHendriks.jpg', 'MichaelKoster.jpg', 'MichelPham.jpg', 'MichielHeeneman.jpg', 'MuratBaş.jpg', 'NielisBrouwer.jpg', 'NielsMeulmeester.jpg', 'OfekSverdlov.jpg', 'PauloFijen.jpg', 'PedroIraburu.jpg', 'PimDoodkorte.jpg', 'RemcoBruggen.jpg', 'RobSpreeuwel.jpg', 'RohanChatterjee.jpg', 'RomyRouwendaal.jpg', 'SaluteJingkaojai.jpg', 'SamuelPirlo.jpg', 'SanderNobel.jpg', 'SanderVeen.jpg', 'SemMeeder.jpg', 'ShiwenNi.jpg', 'SianTee.jpg', 'SjorsCooijmans.jpg', 'SoniaKaczmarek.jpg', 'StanSolinge.jpg', 'TaboWeitzel.jpg', 'ThijmenGoossens.jpg', 'TomDouven.jpg', 'TomFijen.jpg', 'TwanStegeman.jpg', 'WillemHouck.jpg', 'XinyiWang.jpg', 'YannikPeeters.jpg']
  images: string[] = []

  constructor() {
  }

  ngOnInit() {
    this.images = this.names.map(item => `assets/ppics/${item}`)
    console.log(this.images)
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


}
