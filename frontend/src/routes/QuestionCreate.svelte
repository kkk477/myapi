<script>
    import { push } from "svelte-spa-router"
    import fastapi from "../lib/api";
    import Error from "../components/Error.svelte"

    let error = {detail:[]}
    let subject = ''
    let content = ''

    function post_question(event) {
        event.preventDefault()
        let url = "/api/question/create"
        let params = {
            subject: subject,
            content: content,
        }

        fastapi('post', url, params,
        (json) => {
            push("/")
        },
        (json_error) => {
            error = json_error
        })
    }
</script>

<div>
    <h5>질문 등록</h5>
    <Error error={error} />
    <form method="post">
        <label for="subject">제목</label>
        <input type="text" bind:value={subject} />
        <label for="content">내용</label>
        <textarea rows="10" type="text" bind:value={content} />
        <button type="submit" on:click={post_question}>저장하기</button>
    </form>
</div>