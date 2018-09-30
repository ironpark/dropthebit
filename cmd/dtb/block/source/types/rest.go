package types

type Rest struct {
	t string
	params map[string]string
}

func (r *Rest) T() string {
	panic("implement me")
}

func (r *Rest) Json() string {
	panic("implement me")
}

func (r *Rest) GetParamTypes() map[string]string {
	panic("implement me")
}

func (r *Rest) GetParams() map[string]string {
	panic("implement me")
}

func (r *Rest) SetParams(map[string]string) {
	panic("implement me")
}

func (r *Rest) Result() (error, interface{}) {
	panic("implement me")
}


