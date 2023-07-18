import { Button, Card, Form, Input } from "antd"

interface Props {
    id: number
}

export default function Item({ id }: Props) {
    console.log(id)

    const submitHandler = () => {
        console.log('submit run')
    }

    return (
        <Card>
            <h1>{id}</h1>

            <Form name={`item-${id}`} onFinish={submitHandler}>
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
            </Form>

            {/* <form onSubmit={submitHandler}>

                <input type="text" name="username" />
                <input type="password" name="password" />

                <button type="submit">submit</button>
            </form> */}
        </Card>
    )
}