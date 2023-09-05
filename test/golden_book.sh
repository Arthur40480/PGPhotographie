#!/usr/bin/bash

curl 'http://localhost:1337/api/comments' \
    -H 'Accept: application/json, text/plain, */*' \
    -H 'Accept-Language: fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7' \
    -H 'Connection: keep-alive' \
    -H 'Content-Type: application/json' \
    -H 'Origin: http://localhost:5173' \
    -H 'Referer: http://localhost:5173/' \
    -H 'Sec-Fetch-Dest: empty' \
    -H 'Sec-Fetch-Mode: cors' \
    -H 'Sec-Fetch-Site: same-site' \
    -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36' \
    -H 'sec-chogle Chrome";v="116"' \
    -H 'sec-ch-ua-mobile: ?0-ua: "Chromium";v="116", "Not)A;Brand";v="24", "Go' \
    -H 'sec-ch-ua-platform: "Windows"' \
    --data-raw '{"data":{"firstname":"qqsdqsdqsd","lastname":"Test","comment":"Qsdfqsd","recaptchaToken":"03ADUVZwDcmYKIBk1hYb5XURboilb-gV89EZptAVA3o92dg3OItxEw3DxSi7OU70Xei1PfAKr2fwhKL3VK5rOehACeUXuMuFznJETmoSrK4umepxSBljxhI-uHNpSNc7H-rRAFy8JRyb74zWf9xo_vxNFRymeMUKY7DGr4CYljkwFOgBWukBBZBjYMCcPsdVvmOlwNYp7rojh_3lzh6p9thnqLx6eDpyzKlpG29qNQsd1xxtoH7tOt-yESAmh5hK97xIAZE0xiXnTyyPgTXV-t8GB4OO0aFoFLjMbBvdVpON15p1hVoAdhqItVpNQdqXkWp-vcdCMg2rVENhJr2SiVUnwsW6UqwBk0Lbmxc05Fol_6m9b_0T9CUObJUOemtBCKU-gpDiGvFsgfGGhk6CoWGAH8wi_H0_3jClgdHORcIp14dSU7xF6KjHG34RVf7kp3VSYkgGMu5_0MNt9TgSqvwonKXomdR4MjOHewoS4AWrlB97pNcjx8Duhxw7yf_XLi3-B6XVWok0xEgRJhtSK6yu3pBVCGvsV-rR6b4jaZCRKdkTeg0iPt-lL-FHjNYCfjM6dCylp1sKhTRX7Ptf867CKmxwigyUE9V7Nk8s9dLdm9_uFX07akaE5yNDrXCxvUvc1TyEwYb9D7OrDzAqa6vmTVdXjSTY5sKUQA111XE-AsxVpk4Ong0TYWQFvSKLWIL9ptJKeknegI-JHwaxzCKZoF2P1YguQ6SWO-zNtxhRcHnZvgtXErMumP-DhV2heTuavr9LzLAyiZR_HdJ5rRm37Wj29q-97el-RUwm2e0qPWPg4ciUcPuTs1RuUchi-VOlyqmhXQIjlr4-QPmjtWBDA-Ym5SYFNjDpFXiFeb0bdWejRP_dBQGatHSOI44PfrQKSTMdBxKa9Dh83SOl7OL7nMEcie6q27QtGdhOhpZuAIVxV_jzbUimbsWW6U_dmjF8c7efU4KWUqTn6--g7dcu1vAf8qLi0eM7sqD2Fi9jhXAziFQPQlypqN0QkGhgVIYKdP-6O8sp6-lyW2Da4Ka6jRfbX44fWybUhRe-b45dfvLsLXHjSMryuShHNgZuXf-v6_9MZIDzDv6u_EUE5iGguIVwMkg2EJ52s9ufx5vf2eQE4usHxxjgPGOE4cll1amAw1Ndrq0JM2-oB44wvEdtJbGZaCGRNW0bT170F7IGT8-N1U1RkNstPcXLnzG6oWvfTmXlsU8j8SxZB1xpS_b3ba49i03YxpkoANcNxZhTAc4FqY0iPmOolmKfET8OJcwITETek4PumwBztIX_IrmKlqma7hJs73xIRL-9ULydu5GusbNuzt3j3wEs21qgwQMfVStsorRgtUymsn6SuKQSLcdNtaJiqtsXTvadhJ7TJEiNUOeobbQ4_go6MBflvnmLMX9cA04kRMt-toO0wU0pwQGKbNPeUeaza47kGXp-uhzRistrCifVWd9HU_rf49vkQXIBrNK6EtGHDW8Q6kkXGI7F6caslccZkSe12izz_swNB_svWiHmLjmOvnStsSS4u-v2FlsDeUYLgUCFBVoxmyqMLDZid_RicLXgRWKhcaauLRFsRptGCk_19tOLtlyDQd3E9faETR"}}' \
    --compressed
