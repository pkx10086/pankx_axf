from django.test import TestCase
#!/usr/binpython3
import pymysql;
def connDb():
    #打开数据库链接
    db  = pymysql.connect("localhost","root","123456","axf")
    # 使用 cursor() 方法创建一个游标对象cursor
    cursor = db.cursor()

    #使用execute()方法执行SQL查询
    cursor.execute("select version()")
    #使用 fetchone() 方法获取单条数据
    data = cursor.fetchone()

    print("Database version:%s " %data)
    #关闭数据库链接
    db.close();

def main():
    connDb()


if __name__=='__main__':
    main()
