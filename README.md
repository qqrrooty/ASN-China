
# ASN-China
实时更新 CN 的 ASN 数据库。
## 特征
本项目用于 **实时更新中国 ASN 数据**，每天凌晨 1 点（北京时间 UTC+8）根据 [missuo/ASN-China](https://github.com/missuo/ASN-China) 自动生成适用于 **Clash / mihomo** 等代理内核的规则集文件。
## 安装 / 使用
简单说明如何下载、安装、运行：
```
rule-providers:
    CN_ASN:
      type: http
      behavior: classical
      url: "https://raw.githubusercontent.com/qqrrooty/ASN-China/main/CN_ASN.yaml"
      path: ./ruleset/CN_ASN.yaml
      interval: 86400
      format: yaml
```
---
## 数据来源
ASN 数据来源于：
- https://github.com/missuo/ASN-China
本项目仅用于自动化拉取并转换格式，不包含原项目代码。
