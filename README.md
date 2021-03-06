# π» κ³ κ° κ΄λ¦¬ νλ‘κ·Έλ¨
> μ¬μ¬ν΄μ λ§λ  ν μ΄ νλ‘μ νΈ  
κ°λ° μΌμ : 2021λ 06μ 12μΌ

  * <a href="#-developer">Developer</a>
  * <a href="#-tech-stack">Tech Stack</a>
  * <a href="#-api">API</a>
  * <a href="#-ui">UI</a>
  * <a href="#-erd">ERD</a>

<br>

### π¨π»βπ» Developer
<table>
  <tr>
    <td align="center"><a href="https://github.com/woorim960"><img src="https://avatars.githubusercontent.com/u/56839474?v=4" width="100px;" alt=""/><br /><sub><b>λ°μ°λ¦Ό</b></sub></a><br /><a href="https://github.com/woorim960" title="Packaging/porting to new platform">λ°±μλ κ°λ°</a></td>
    <td align="center"><a href="https://github.com/jsj1510"><img src="https://avatars.githubusercontent.com/u/75245755?v=4" width="100px;" alt=""/><br /><sub><b>μ μμ€</b></sub></a><br /><a href="https://github.com/jsj1510" title="Packaging/porting to new platform">νλ°νΈ κ°λ°</a></td>
  </tr>
</table>

<br>

### π Tech Stack
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

### π API

1. κ³ κ° μ‘°ν 
   -  Input μ°½μ μλ ₯λ search λ°μ΄ν°λ‘ κ²μ
   -  **URL :** ```/api/customers``` 
   -  **METHOD :** ```GET```
   -  **SQL :** 
   ```sql
   SELECT no, name, contract_description AS contractDescription, 
   date_format(contract_start_date, '%Yλ %mμ %dμΌ') AS contractStartDate, 
   date_format(contract_end_date, '%Yλ %mμ %dμΌ') AS contractEndDate 
   FROM customers 
   WHERE name LIKE ? 
   ORDER BY name;
   ```
2. μ¬μ΄νΈ μ‘°ν
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
3. μ¬μ΄νΈ μΆκ°
   -  **URL :** ```/api/site/new/:no/:name``` 
   -  **METHOD :** ```POST```
   -  **SQL :** 
   ```sql
   INSERT INTO sites(customer_no, name, address) VALUES (?, ?, ?);
   ```
5. μ¬μ΄νΈ μμ 
   -  **URL :** ```/api/site/edit/:no/:name``` 
   -  **METHOD :** ```PUT```
   -  **SQL :** 
   ```sql
   UPDATE sites SET name=?, address=? WHERE no=?;
   ```
6. μ¬μ΄νΈ μ­μ 
   -  **URL :** ```/api/site``` 
   -  **METHOD :** ```DELETE```
   -  **SQL :** 
   ```sql
   DELETE FROM sites WHERE no=?
   ```

<br>

### π UI

* μ΄κΈ°νλ©΄(index)  
  
<p align="center"><img src="https://user-images.githubusercontent.com/75245755/121766906-156b1300-cb90-11eb-9828-7937342be842.PNG" width="80%"></p>
<br/>  

* indexνλ©΄ μ‘°ν(κ²μ) λ²νΌ ν΄λ¦­  
  
<p align="center"><img src="https://user-images.githubusercontent.com/75245755/121767530-91b32580-cb93-11eb-8afc-88d22cebad2b.PNG" width="80%"></p>
<br>  

* μ νλ Nodeμ κ°μμ λ°λ₯Έ Alert
> μμ  λλ μ­μ  2κ°μ΄μ ν΄λ¦­ or μλ¬΄κ²λ ν΄λ¦­ μν  μ μμ  λ° μ­μ  λΆκ°  
<p align="center"><img src="https://user-images.githubusercontent.com/75245755/121767557-caeb9580-cb93-11eb-9fa3-c397381812e2.PNG" width="80%"></p>  

* index κ²μ κΈ°λ₯  
  
<p align="center"><img src="https://user-images.githubusercontent.com/75245755/121767576-e656a080-cb93-11eb-989d-333f32fb1de2.PNG" width="80%"></p>
<br>
 
* κ³ κ° νλ‘νμΌ μ¬μ΄νΈ μ‘°ν νλ©΄ (view)  
> index νλ©΄μμ data μ ν ν μ‘°ν μ μλμ κ°μ νλ©΄μΌλ‘ μ΄λλ¨.    
<p align="center"><img src="https://user-images.githubusercontent.com/75245755/121767590-fff7e800-cb93-11eb-8187-9df254d4c146.PNG" width="80%"></p>  
<br>  


* μλ ₯ νλ©΄  
  
<p align="center"><img src="https://user-images.githubusercontent.com/75245755/121767605-1aca5c80-cb94-11eb-8658-336481f974b7.PNG" width="80%"></p>  
<br>  

* μλ ₯ ν view νλ©΄  
  
<p align="center"><img src="https://user-images.githubusercontent.com/75245755/121767620-3fbecf80-cb94-11eb-90ab-3b0cce8b20ff.PNG" width="80%"></p>  
<br>  

*  μ νλ Nodeμ κ°μμ λ°λ₯Έ Alert
> μμ  λλ μ­μ  2κ°μ΄μ ν΄λ¦­ or μλ¬΄κ²λ ν΄λ¦­ μν  μ μμ  λ° μ­μ  λΆκ°  
  
<p align="center"><img src="https://user-images.githubusercontent.com/75245755/121767631-5402cc80-cb94-11eb-9770-66ef864043bb.PNG" width="80%"></p>  
<br>  


* μμ   
> μλ‘­κ² μλ ₯ν (μλ‘μ΄, μλ ₯) λ°μ΄ν° (μλ‘μ΄μλ ₯, μμ ) μΌλ‘ μμ     
<p align="center"><img src="https://user-images.githubusercontent.com/75245755/121767654-83193e00-cb94-11eb-9f5e-fa23baa497b6.PNG" width="80%"></p>  
<br>  


* μ­μ   
> μμ  ν (μλ‘μ΄μλ ₯, μμ ) λ°μ΄ν° μ­μ   
<p align="center"><img src="https://user-images.githubusercontent.com/75245755/121767649-785ea900-cb94-11eb-9539-dc7302179768.PNG" width="80%"></p>  


### π ERD
![αα³αα³αα΅α«αα£αΊ 2021-06-14 αα©αα? 9 20 28](https://user-images.githubusercontent.com/56839474/121891443-688ec280-cd56-11eb-9994-c21cd30ee73e.png)









