* mysql创建表（带外健）

```
create table department(
dept_name varchar(20),
budget int,
descript varchar(20),
primary key(dept_name)
)

create table course(
course_id varchar(20),
deptnames varchar(20),
credits int,
foreign key(deptnames) references department(dept_name));

```

* course表的外键deptnames指向department表的dept_name。

* 若要删除department，course这两个表，则必须先删除course表，再删除department表



# sequelize

* mysqlworkbench -> database -> reverse enginneer database 制作  eerdiagram 即 表之间的关系

* 级联关系  ON DELETE CASCADE ON UPDATE CASCADE;
```

ALTER TABLE `koa2-weibo`.`blogs` 
DROP FOREIGN KEY `blogs_ibfk_1`;
ALTER TABLE `koa2-weibo`.`blogs` 
ADD CONSTRAINT `blogs_ibfk_1`
  FOREIGN KEY (`userId`)
  REFERENCES `koa2-weibo`.`users` (`id`)
  ON DELETE CASCADE
  ON UPDATE CASCADE;

```