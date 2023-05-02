export interface ModelView<T, R1, R2> {
	template(parametro: T): R1;
        update(parametro: T): R2;
}
