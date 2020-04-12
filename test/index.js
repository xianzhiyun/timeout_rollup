const path = require('path')
const {Iconfont} = require('../dist/iconfont.cjs');
const iconConfig = {
    url: 'https://www.iconfont.cn/api/project/download.zip?spm=a313x.7781069.1998910419.d7543c303&pid=1654297&ctoken=RjZZYphYli6XuLPqvp-ZAd7a',
    toPath: path.join(__dirname, './features'),
    cookie: 'trace=AQAAAPK3jSx+sQEAkRPgcLI7Z+PHXH+N; cna=BHETF/lXgncCAXDgE5Fuvw2i; ctoken=RjZZYphYli6XuLPqvp-ZAd7a; EGG_SESS_ICONFONT=U8AXvqwdm-42-umGXGwgKq_Emj2wuVCkA87TjZ3dn6xm2T4whio3sIKoy4kjkuBSusLMQ-0MhcjWBE1FwhfGmMbpO9xPCEANAHIhoET_7kLMg-qVGhDYJaXU8YYDzntAGc2y-mrQgCfFo0I4F4Tp8RAVfOZtvfFFaB0zh-qvIUccnVG5uLU_w9iC8AX_ngZly6NWekbGMLKNEcuTN2Ya7qwssRh620kQDRg0Klp1Zhy7q2Ldbi7tBvsZz8w2Vpa1vhh6794-FIy7meSEXTn2lhJFrPve_TsDTOWkhS3gNOWjfEUoaD3nhjJ_ECyUn_u1M7Dk0fiCdR3bd4x2x2BWn4-g4kEOmD9HxVB9fiBpPw5Yhnx5r8HDatJOB7FvcxRXyXR0pJE9ZIwSmg5kfKydMG2TwI13xEJ8CRx-KcnsYHI_zQietA_hZ76fLmTNmi5r54_wk81iWsCBw2koZ-HBEAKIu_GtiXhmJesnvVTUW_8F9JD0OzA_C1iFAz4j9GxP1GDZJWzjgDwt0olEj-ucJ15mVkcG-vsmm4ECu8lQ-dyzj3arIgFp3W2965FAKLorxksj-eCeWCX9kxhcoIYLQ4s6DeiL3-nUW4XbN3qbvYJHkgZMNeV1GV84ylVc2qgWHL2mt1SzVf6UVDY-o7FpyTZ1s3I-n0yYVunTaAScn2iglZJr7YJzqe-2KsMFYwHKDuEVhQknnYgWKs_3VzPYTx_6MHWmmyFLtFmhznE51eu3-4BoPvWfhv9PY36UaaIH1fVKiXSX-GyGSEoBDdJD4GumB-mlZxjunuNqZbYazGpbou9X8NQYQOf0bRbM6o89VsU2Ia5XVsKI7wbhUJUWJ4WSiMqrBMyNS5875tVT5JTePCzfhO2av_0NGYJd3ygHPpeFwp3DBxj9Ir6xT8mGROhw6NPcOhBm88eIAdabV91mLCiTT_t7v7-kv3v8a-ofx9wIF5cMQsRYjAPcRoVN-PxGHTIcHuQcM7e3zd9ntp5m9Z0shNC5UNwRtvLuxTWvQNlSgUMMd9w0CCBoE_e4flLcmEYhQe5DP1ddJmgscFGnXlVwZoLYSKrvAGUXzjmuunzOP9Eti4HGC_8lSHe18LbpghAFKTeJUkaancAqy5qOcbRb-tt7ufBBy12-x9kg; u=3868384; u.sig=kBUzsFyISEpQxE_TSczO_NUWuYszOgmOowTghkeFBfM; isg=BD09yYQ1P9BsspsIQ5ve5_cgTJk32nEsLYzbMP-AJhTDNlxoxyh8_U2g4Gpwtonk'
}
new Iconfont(iconConfig).handleProcess()
