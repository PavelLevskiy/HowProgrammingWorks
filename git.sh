echo Hello!
git init
git add .
read -r -p 'Commit message: ' desc
git commit -m $desc
git remote rm origin
git remote add origin https://github.com/PavelLevskiy/HowProgrammingWorks.git
git pull origin master
git push origin master
echo End See latter!
