import faker from 'faker'

faker.seed(123)

const articles = []
for (let i = 0; i < 100; i++) {
	articles.push({
		id: i,
		author: faker.name.findName(),
		title: faker.lorem.sentence()
	})
}

export default {
	listArticles() {
		return articles
	},
	getArticle(id) {
		return articles.find(e => {
			return e.id == id
		})
	}
}
