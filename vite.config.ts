import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
export default defineConfig({plugins:[react(),VitePWA({registerType:'autoUpdate',includeAssets:['icon.svg'],manifest:{name:'ASCENDANT — Life RPG',short_name:'ASCENDANT',description:'Level up your real life',theme_color:'#100e1b',background_color:'#100e1b',display:'standalone',start_url:'/',icons:[{src:'icon.svg',sizes:'any',type:'image/svg+xml',purpose:'any'}]}})]});
