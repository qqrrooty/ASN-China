/**
 * CN ASN auto builder
 * Source: https://github.com/missuo/ASN-China
 * Maintainer: qqrrooty
 */

import fs from "fs";
import https from "https";

const SOURCE =
  "https://raw.githubusercontent.com/missuo/ASN-China/main/ASN.China.list";

const OUTPUT = {
  asn: "CN_ASN.list",
  asnNoResolve: "CN_ASN_No_Resolve.list",
  yaml: "CN_ASN.yaml",
  yamlNoResolve: "CN_ASN_No_Resolve.yaml",
};

function fetch(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        let data = "";
        res.on("data", (c) => (data += c));
        res.on("end", () => resolve(data));
      })
      .on("error", reject);
  });
}

function nowCST() {
  return new Date(Date.now() + 8 * 3600 * 1000)
    .toISOString()
    .replace("T", " ")
    .replace(".000Z", "");
}

async function main() {
  const raw = await fetch(SOURCE);

  const asns = raw
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l && !l.startsWith("//"))
    .map((l) => l.split("//")[0].trim());

  const header =
    `# CN 的 ASN 信息\n` +
    `# 最后更新： CST ${nowCST()}\n` +
    `# ASN: ${asns.length}\n` +
    `# 来源 missuo ，由 qqrrooty 制作。\n\n`;

  fs.writeFileSync(
    OUTPUT.asn,
    header + asns.map((a) => `${a},no-resolve`).join("\n") + "\n"
  );

  fs.writeFileSync(
    OUTPUT.asnNoResolve,
    header + asns.join("\n") + "\n"
  );

  fs.writeFileSync(
    OUTPUT.yaml,
    header +
      "payload:\n" +
      asns.map((a) => `  - ${a},no-resolve`).join("\n") +
      "\n"
  );

  fs.writeFileSync(
    OUTPUT.yamlNoResolve,
    header +
      "payload:\n" +
      asns.map((a) => `  - ${a}`).join("\n") +
      "\n"
  );

  console.log("CN ASN rebuilt");
}

main();
