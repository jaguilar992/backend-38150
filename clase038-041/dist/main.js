(()=>{"use strict";var e={n:s=>{var r=s&&s.__esModule?()=>s.default:()=>s;return e.d(r,{a:r}),r},d:(s,r)=>{for(var n in r)e.o(r,n)&&!e.o(s,n)&&Object.defineProperty(s,n,{enumerable:!0,get:r[n]})},o:(e,s)=>Object.prototype.hasOwnProperty.call(e,s)};const s=require("express");var r=e.n(s);const n=require("cookie-parser"),o=require("cors"),c=require("dotenv");e.n(c)().config();const E=process.env.PORT||8080,p=(process.env.BASE_URL,process.env.MONGO_URI,process.env.SECRET||"SECRET"),_=(Number(process.env.PAGE_SIZE),process.env.S3_ACCESS_KEY,process.env.S3_SECRET_KEY,process.env.S3_ENDPOINT,process.env.S3_BUCKET_NAME,process.env.GMAIL_PASSWORD,process.env.MY_EMAIL_ADDRESS,process.env.EMAIL_HOST,Number(process.env.EMAIL_PORT),process.env.OAUTH_CLIENT_ID,process.env.OAUTH_CLIENT_SECRET,process.env.AUTH0_DOMAIN,process.env.AUTH0_CLIENT_ID,process.env.AUTH0_CLIENT_SECRET,process.env.AUTH0_AUDIENCE,require("pino")),v=e.n(_)()(),t=r()();t.use(r().json()),t.use(r().urlencoded({extended:!0})),t.use(n(p)),t.use(o()),t.get("/",((e,s)=>s.json({time:Date.now()}))),t.listen(E,(()=>{v.info(`🔋 Server running on port::${E}`)}))})();