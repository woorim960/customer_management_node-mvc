# 💻 고객 관리 프로그램
> 심심해서 만든 토이 프로젝트  
개발 일자 : 2021년 06월 12일

  * <a href="#-api">API</a>
  * <a href="#-developer">Developer</a>
  * <a href="#-tech-stack">Tech Stack</a>
  * <a href="#-ui">UI</a>
  * <a href="#-erd">ERD</a>

<br>

### 📝 API

1. 고객 조회 
   -  Input 창에 입력된 search 데이터로 검색
   -  **URL :** ```/api/customers``` 
   -  **METHOD :** ```GET```
   -  **SQL :** 
   ```sql
   SELECT no, name, contract_description AS contractDescription, 
   date_format(contract_start_date, '%Y년 %m월 %d일') AS contractStartDate, 
   date_format(contract_end_date, '%Y년 %m월 %d일') AS contractEndDate 
   FROM customers 
   WHERE name LIKE ? 
   ORDER BY name;
   ```
2. 사이트 조회
   -  **URL :** ```/api/sites``` 
   -  **METHOD :** ```GET```
   -  **SQL :** 
   ```sql
   SELECT st.no AS no, st.name AS name, st.address AS address
   FROM sites AS st
   JOIN customers AS ctm
   ON st.customer_no = ctm.no
   WHERE ctm.no=? AND ctm.name=?;
   ```
3. 사이트 추가
   -  **URL :** ```/api/site/new/:no/:name``` 
   -  **METHOD :** ```POST```
   -  **SQL :** 
   ```sql
   INSERT INTO sites(customer_no, name, address) VALUES (?, ?, ?);
   ```
5. 사이트 수정
   -  **URL :** ```/api/site/edit/:no/:name``` 
   -  **METHOD :** ```PUT```
   -  **SQL :** 
   ```sql
   UPDATE sites SET name=?, address=? WHERE no=?;DELETE FROM sites WHERE no=?
   ```
6. 사이트 삭제
   -  **URL :** ```/api/site``` 
   -  **METHOD :** ```DELETE```
   -  **SQL :** 
   ```sql
   DELETE FROM sites WHERE no=?
   ```

<br>

### 👨🏻‍💻 Developer
<table>
  <tr>
    <td align="center"><a href="https://github.com/woorim960"><img src="https://avatars.githubusercontent.com/u/56839474?v=4" width="100px;" alt=""/><br /><sub><b>박우림</b></sub></a><br /><a href="https://github.com/woorim960" title="Packaging/porting to new platform">백엔드 개발</a></td>
    <td align="center"><a href="https://github.com/jsj1510"><img src="https://avatars.githubusercontent.com/u/75245755?v=4" width="100px;" alt=""/><br /><sub><b>전상준</b></sub></a><br /><a href="https://github.com/jsj1510" title="Packaging/porting to new platform">프런트 개발</a></td>
  </tr>
</table>

<br>

### 📚 Tech Stack
* **Back**
   - Node.js
   - Express
   - MySQL
   - EJS
   - dotenv  

* **Front**
   - HTML5 ```EJS```
   - CSS3
   - Vanila JS ```ES6+```
   - DOM

<br>

### 🍀 UI

* 초기화면(index)  
  
<p align="center"><img src="https://user-images.githubusercontent.com/75245755/121766906-156b1300-cb90-11eb-9828-7937342be842.PNG" width="80%"></p>
<br/>  

* index화면 조회(검색) 버튼 클릭  
  
<p align="center"><img src="https://user-images.githubusercontent.com/75245755/121767530-91b32580-cb93-11eb-8afc-88d22cebad2b.PNG" width="80%"></p>
<br>  

* 선택된 Node의 개수에 따른 Alert
> 수정 또는 삭제 2개이상 클릭 or 아무것도 클릭 안할 시 수정 및 삭제 불가  
<p align="center"><img src="https://user-images.githubusercontent.com/75245755/121767557-caeb9580-cb93-11eb-9fa3-c397381812e2.PNG" width="80%"></p>  

* index 검색 기능  
  
<p align="center"><img src="https://user-images.githubusercontent.com/75245755/121767576-e656a080-cb93-11eb-989d-333f32fb1de2.PNG" width="80%"></p>
<br>
 
* 고객 프로파일 사이트 조회 화면 (view)  
> index 화면에서 data 선택 후 조회 시 아래와 같은 화면으로 이동됨.    
<p align="center"><img src="https://user-images.githubusercontent.com/75245755/121767590-fff7e800-cb93-11eb-8187-9df254d4c146.PNG" width="80%"></p>  
<br>  


* 입력 화면  
  
<p align="center"><img src="https://user-images.githubusercontent.com/75245755/121767605-1aca5c80-cb94-11eb-8658-336481f974b7.PNG" width="80%"></p>  
<br>  

* 입력 후 view 화면  
  
<p align="center"><img src="https://user-images.githubusercontent.com/75245755/121767620-3fbecf80-cb94-11eb-90ab-3b0cce8b20ff.PNG" width="80%"></p>  
<br>  

*  선택된 Node의 개수에 따른 Alert
> 수정 또는 삭제 2개이상 클릭 or 아무것도 클릭 안할 시 수정 및 삭제 불가  
  
<p align="center"><img src="https://user-images.githubusercontent.com/75245755/121767631-5402cc80-cb94-11eb-9770-66ef864043bb.PNG" width="80%"></p>  
<br>  


* 수정  
> 새롭게 입력한 (새로운, 입력) 데이터 (새로운입력, 수정) 으로 수정    
<p align="center"><img src="https://user-images.githubusercontent.com/75245755/121767654-83193e00-cb94-11eb-9f5e-fa23baa497b6.PNG" width="80%"></p>  
<br>  


* 삭제  
> 수정 한 (새로운입력, 수정) 데이터 삭제  
<p align="center"><img src="https://user-images.githubusercontent.com/75245755/121767649-785ea900-cb94-11eb-9539-dc7302179768.PNG" width="80%"></p>  


### 🍀 ERD
![스크린샷 2021-06-14 오후 9 20 28](https://user-images.githubusercontent.com/56839474/121891443-688ec280-cd56-11eb-9994-c21cd30ee73e.png)









