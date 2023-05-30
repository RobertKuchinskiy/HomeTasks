//Домашнее задание №3

const fs = require("fs-extra");

fs.ensureDirSync("new_folder")

fs.writeFileSync("new_folder/test3.txt", "Hello, IT-Academy!")

fs.ensureDirSync("new_folder2")

fs.moveSync ("new_folder/test3.txt", "new_folder2/test3.txt")

fs.ensureDirSync("new_folder3")

fs.copySync ("new_folder2/test3.txt", "new_folder3/test3.txt")

fs.removeSync ("new_folder2/test3.txt")

fs.removeSync ("new_folder3/test3.txt")

fs.rmdirSync ("new_folder")

fs.rmdirSync ("new_folder2")

fs.rmdirSync ("new_folder3")


// Proccess done