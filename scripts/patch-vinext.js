import fs from "node:fs";
import path from "node:path";

const targetFile = path.resolve("node_modules/vinext/dist/server/static-file-cache.js");

if (fs.existsSync(targetFile)) {
  let content = fs.readFileSync(targetFile, "utf-8");
  if (content.includes("relativePath: path.relative(base, batch[j]),")) {
    content = content.replace(
      "relativePath: path.relative(base, batch[j]),",
      'relativePath: path.relative(base, batch[j]).replaceAll("\\\\", "/"),'
    );
    fs.writeFileSync(targetFile, content, "utf-8");
    console.log("[patch-vinext] Successfully patched Windows path separators in vinext static file cache.");
  }
}
