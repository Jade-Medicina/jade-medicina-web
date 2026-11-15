// Curvas de la portada de Inicio dibujadas con los colores del manual (ajuste interno 09/11/2026).
export const HeroCurves = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 1440 300" preserveAspectRatio="none" aria-hidden="true" focusable="false">
    <defs>
      <linearGradient id="curva-turquesa" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stopColor="#00AEAC" />
        <stop offset=".55" stopColor="#00AEAC" stopOpacity=".85" />
        <stop offset="1" stopColor="#8CCCB0" />
      </linearGradient>
      <linearGradient id="curva-jade" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stopColor="#007F7D" stopOpacity=".9" />
        <stop offset="1" stopColor="#00AEAC" stopOpacity=".7" />
      </linearGradient>
    </defs>
    <path
      d="M0 300V170C200 150 330 150 420 120C520 86 600 70 700 90C860 122 1000 180 1180 140C1300 112 1380 70 1440 50V300Z"
      fill="#8CCCB0"
      opacity=".3"
    />
    <path
      d="M0 192C200 168 330 170 430 140C530 108 610 92 710 112C870 144 1010 200 1190 160C1310 132 1390 84 1440 60V104C1390 128 1310 176 1190 204C1010 244 870 188 710 156C610 136 530 152 430 184C330 214 200 212 0 236Z"
      fill="url(#curva-turquesa)"
      opacity=".9"
    />
    <path
      d="M0 300V250C200 226 360 224 480 200C600 176 700 170 820 196C960 226 1100 250 1260 210C1350 188 1410 160 1440 148V300Z"
      fill="url(#curva-jade)"
    />
    <path
      d="M0 146C180 142 300 140 380 118C470 92 540 64 640 66C780 70 920 150 1120 138C1280 128 1380 60 1440 24"
      fill="none"
      stroke="#00AEAC"
      strokeWidth="2"
      opacity=".7"
      vectorEffect="non-scaling-stroke"
    />
    <path
      d="M0 164C190 160 320 160 420 136C520 112 600 92 700 100C860 112 1000 190 1200 168C1320 154 1400 96 1440 66"
      fill="none"
      stroke="#8CCCB0"
      strokeWidth="3"
      opacity=".9"
      vectorEffect="non-scaling-stroke"
    />
    <path
      d="M1440 0C1360 60 1280 110 1140 140C960 178 760 160 560 200"
      fill="none"
      stroke="#007F7D"
      strokeWidth="1.5"
      opacity=".55"
      vectorEffect="non-scaling-stroke"
    />
    <path
      d="M1440 20C1370 90 1300 140 1170 175C1020 215 860 210 700 240"
      fill="none"
      stroke="#8CCCB0"
      strokeWidth="2"
      opacity=".8"
      vectorEffect="non-scaling-stroke"
    />
    <path
      d="M0 120C60 134 120 172 170 230C200 266 214 286 230 300"
      fill="none"
      stroke="#007F7D"
      strokeWidth="1.5"
      opacity=".5"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
);

export default HeroCurves;
