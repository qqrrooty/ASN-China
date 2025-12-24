ASN-China
实时更新 CN 的 ASN 和 IP 数据库。


rule-providers:
  CN_ASN:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/qqrrooty/ASN-China/main/CN_ASN.yaml"
    path: ./ruleset/CN_ASN.yaml
    interval: 86400
    format: yaml
