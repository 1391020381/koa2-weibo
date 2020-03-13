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