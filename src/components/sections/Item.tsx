import { Button, Card, Form, Input } from "antd"

interface Props {
    id: number
}

export default function Item({ id }: Props) {
    console.log(id)

    const submitHandler = (e: any) => {
        e.preventDefault()

        console.log('submit run')
    }

    return (
        <Card>
            <h1>{id}</h1>

            {/* <Form name={`item_${id}`} onFinish={submitHandler}>
                <Form.Item
                    name={`username`}
                    label='key name'
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name={`password`}
                    label='password'
                >
                    <Input.Password placeholder="password here" />
                </Form.Item>

                <Button
                    type="primary"
                    htmlType="submit"
                >
                    Save
                </Button>
            </Form> */}

            <form onSubmit={submitHandler} name={`item_${id}`}>

                <label htmlFor={`username_${id}`}>Username</label>
                <input type="text" name={`username_${id}`} id={`username_${id}`} />

                <label htmlFor={`password_${id}`}>Password</label>
                <input type="password" name={`password_${id}`} id={`password_${id}`} />

                <button type="submit">submit</button>
            </form>
        </Card>
    )
}