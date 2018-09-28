package source

type Source interface {
	T() string
	Json() string
	GetParams() map[string]string
	SetParams(map[string]string)
	Result() (error, interface{})
}
