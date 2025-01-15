



const ap = new APlayer({
  container: document.getElementById('aplayer'),
  fixed: true,
  mini: true,
  autoplay: false,
  listFolded: true,
  theme: '#2068bf', // 主题色
  loop: 'all',
  order: 'list',
  preload: 'metadata', // 'none' | 'metadata' | 'auto'
  volume: 0.7, 
  mutex: true, // 互斥，阻止多个播放器同时播放
  listFolded: true,
  listMaxHeight: 90,
  lrcType: 3, // 0: 不显示歌词, 1: 网易云歌词, 3: 普通歌词
  audio: [
    {
      name: '月の繭(月之茧)',
      artist: '奥井亜紀',
      url: 'http://music.163.com/song/media/outer/url?id=28182273.mp3',
      cover: 'http://p1.music.126.net/JIkaThPKUhoXNM1QNgpByg==/5866994045904737.jpg?param=300x300',
      lrc: 'https://cowboy446.github.io/music/月の繭/月の繭-奥井亜紀.lrc',
    },
    // {
    //   name: '水の星へ爱をこめて(将爱献给水之星)',
    //   artist: '森口博子',
    //   url: 'http://music.163.com/song/media/outer/url?id=494858545.mp3',
    //   cover: 'https://cowboy446.github.io/music/水の星へ爱をこめて/cover.jpg',
    //   lrc: 'https://cowboy446.github.io/music/水の星へ爱をこめて/水の星へ愛をこめて-森口博子.lrc',
    //   theme: '#2068bf'
    // },
    // {
    //   name: 'Midnight Blue',
    //   artist: 'KISSME QUICK',
    //   url: 'http://music.163.com/song/media/outer/url?id=5007568.mp3',
    //   cover: 'http://p2.music.126.net/nhn4hqDQGqdF2zTGjm6GzQ==/109951164011955475.jpg?param=300x300',
    //   lrc: 'https://cowboy446.github.io/music/MidnightBlue/MIDNIGHT BLUE-KISSME QUICK.lrc',
    // },
    // {
    //   name: '爱・おぼえていますか(可曾记得爱)',
    //   artist: '飯島真理',
    //   url: 'http://music.163.com/song/media/outer/url?id=22710240.mp3',
    //   cover: 'http://p2.music.126.net/kJfQyqfiCbhcmmmrz_sBWQ==/873012232488748.jpg?param=300x300',
    //   lrc: 'https://cowboy446.github.io/music/爱 おぼえていますか/愛 おぼえていますか-飯島真理.lrc',
    // },
    // {
    //   name: '背中ごしにセンチメンタル(背后的愁绪)',
    //   artist: '宮里久美',
    //   url: 'http://music.163.com/song/media/outer/url?id=664217.mp3',
    //   cover: 'https://cowboy446.github.io/music/背中ごしにセンチメンタル/cover.jpg',
    //   lrc: 'https://cowboy446.github.io/music/背中ごしにセンチメンタル/背中ごしにセンチメンタル-宮里久美.lrc',
    // },
    {
      name: 'Call Me Call Me',
      artist: 'Steve Conte',
      url: 'http://music.163.com/song/media/outer/url?id=590866.mp3',
      cover: 'http://p1.music.126.net/Dekjjmy7xHnFXQbCAqyE1w==/109951165117122856.jpg?param=300x300',
      lrc: 'https://cowboy446.github.io/music/Call Me Call Me/Call Me Call Me-Steve Conte.lrc',
    },
    {
      name: 'heaven\'s not enough',
      artist: 'Steve Conte',
      url: 'http://music.163.com/song/media/outer/url?id=590177.mp3',
      cover: 'http://p1.music.126.net/EnsuB9nh3gfGt3P5gPR6Lg==/109951163023785025.jpg?param=300x300',
      lrc: 'https://cowboy446.github.io/music/heaven\'s not enough/heaven\'s not enough-Steve Conte.lrc',
    },
    // {
    //   name: 'Laughter In The Rain',
    //   artist: 'Neil Sedaka',
    //   url: 'http://music.163.com/song/media/outer/url?id=27314643.mp3',
    //   cover: 'http://p1.music.126.net/5xOcIYPs87CYXGhFZ6w-lw==/2145147185796242.jpg?param=300x300',
    //   lrc: 'https://cowboy446.github.io/music/Laughter In The Rain/Laughter In The Rain-Neil Sedaka.lrc',
    // },
    // {
    //   name: 'Les Rois du Monde',
    //   artist: 'Gérard Presgurvic',
    //   url: 'http://music.163.com/song/media/outer/url?id=483680382.mp3',
    //   cover: 'http://p1.music.126.net/E2ZwIjjg7Kk8ih8nbbMVmA==/109951165698115160.jpg?param=300x300',
    //   lrc: 'https://cowboy446.github.io/music/Les Rois du Monde/Les rois du monde-Cover Team,Gérard Presgurvic.lrc',
    // },
    
    // {
    //   name: 'My Goodbye',
    //   artist: 'EPIC Ensemble',
    //   url: 'http://music.163.com/song/media/outer/url?id=2017719448.mp3',
    //   cover: 'http://p1.music.126.net/dHnMMqBMztfNt-kazO4GEw==/109951169725487284.jpg?param=300x300',
    //   lrc: 'https://cowboy446.github.io/music/My Goodbye/My Goodbye-Jorge Rivera-Herrans,Teagan Earley,EPIC Ensemble.lrc',
    // },
    {
      name: '傘の中',
      artist: '土井美加',
      url: 'http://music.163.com/song/media/outer/url?id=22710307.mp3',
      cover: 'http://p1.music.126.net/kJfQyqfiCbhcmmmrz_sBWQ==/873012232488748.jpg?param=300x300',
      lrc: 'https://cowboy446.github.io/music/傘の中/傘の中-土井美加.lrc',
    },
    {
      name: '若我不曾见过太阳',
      artist: '知更鸟 Chevy',
      url: 'http://ws.stream.qqmusic.qq.com/C400001bzowH1QMPXo.m4a?guid=143120983&vkey=25C1A0B9118AB022DCD7EA884DA2892C7FC6FE0E1E1905AB8C88885DB5BC4CDEF7E58A69A33ABB5F0370809967EB2F7EDFB7838B653102B3__v2b94c25a&uin=&fromtag=120032&src=C400000nLS3M0EEZF8.m4a',
      cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002HgJfp494Uax.jpg',
      lrc: 'https://cowboy446.github.io/music/若我不曾见过太阳/若我不曾见过太阳-知更鸟,HOYO-MiX,Chevy.lrc',
    }
  
  ],
});

// 设置音乐框为圆角10px
ap.container.style.borderRadius = '10px';

