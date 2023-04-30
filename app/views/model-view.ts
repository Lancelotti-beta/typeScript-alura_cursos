export interface ModelView<T> {
	template(parametro: T): string;
        update(parametro: T): void;
}
