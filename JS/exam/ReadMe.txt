��������� �������!!

����� ������� ��������� ���������� Node.js � npm!!
��� ������ ���������������� � ������� ����� package.json � ������� "npm install".
��� ��������� ����� ������� ����� npm �� ����� �������� ����������� "--save-dev" ����� ������ ����������� � package.json.
������������� gulp � ������� npm ��������� �������� "npm i -g gulp-cli",� ����� ������������� ��� � ��� ������ �������� "npm install --save-dev gulp". 
������������� bower � ������� npm ��������� �������� "npm install -g bower".
��� �� ��� ������ bower ��������� ���������� git (https://git-scm.com/downloads).

��� ������ ���������� ������� ��������� ������� � ��������� ������ � ����� � �������� � �������� gulp ��� gulp watch.
��� ������ �������� ������� ������� �������� "gulp build".

��� ������ ��� �������� �������� ����� ��� ������ ��� index.html, main.scss, core.js.  


- ���� package.json ������ ������ � ������� � ��� ������������ ������(�����������).
- ���� gulpfile.js ������ ������� ��� �������� �������� Gulp � ��� �������.
- ���� .gitignore ������ ������ � ������ � ������ ������� �� ������ ������� �� github.
- ���� .bowerrc ������ ������ � �����, � ������� bower ��������� ������������ ����������.

- � ����� app ����� ��� ���������.
- � ����� app/css ����� ��� ���������������� � ���������������� ��������� css.
- � ����� app/img ����� ��� �������� �����������, ������� ��� ����������� � dist ���������.
- � ����� app/js ����� ��� ���������������� � ���������������� ��������� js.
- � ����� app/sass ����� ����� scss. � ����� libs.scss ����������� ������ (import) �� ��� css ����� ������������ ���������.
������ ���� ���������� ��� css ����� ��������� � ���������� � ����� css � ���� libs.css, ����� libs.css ��������� � libs.min.css
� ������������ � �������. � ����� main.scss  ������� �������� scss ���.
- � ����� app/libs � ������� bower ��������������� ������������ ����������. 
����� ��������� ��������� � ����� gulpfile.js ��������� ��������������� "gulp.task('scripts'.." ��� ���������� js ������ ��������� ���������.
��� �� css ����� ����� ����������� ������� ��������� � ����� libs.scss("@import "../libs/sweetalert/dist/sweetalert";").    

- � ����� dist ���������� ���������������� � ������� ������ �������� gulp build. ����� build-�� ����� dist ���������.
  
 